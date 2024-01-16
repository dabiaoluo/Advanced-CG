import * as THREE from "three"
import Baked from "./Baked.js"
import ArchiModel from "./components/ArchiModels.js"
import Title from "./components/Title.js"
import Experience, { Config } from "./Experience.js"
import Resources from "./Resources.js"
import Screen from "./components/Screen.js"
import RotatingChair from "./components/RotatingChair.js"
import CoffeeSteam from "./components/CoffeeSteam.js"
import Raycaster from "./Raycaster.js"
import Images from "./components/Images.js"

export default class World {
    experience: Experience
    config: Config
    scene: THREE.Scene
    resources: Resources

    room: any = {}
    title: any = {}
    archiModel: ArchiModel
    baked: Baked

    bigScreen: Screen
    smallScreen: Screen

    images: Images

    chair: RotatingChair
    coffeeSteam: CoffeeSteam

    raycaster: any

    constructor(_options?: any) {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on("groupEnd", (_group) => {
            if (_group.name === "base") {
                // this.setRoom()
                this.setBaked()
                this.setTitle()
                this.setArchiModel()
                this.setScreens()
                this.setImages()
                this.setChair()
                this.setCoffee()
                this.setRaycaster()
            }
        })
    }

    setBaked(): void {
        this.baked = new Baked()
    }

    setTitle(): void {
        this.title = new Title()
    }

    setArchiModel(): void {
        this.archiModel = new ArchiModel()
    }

    setImages(): void {
        this.images = new Images()
    }

    setScreens(): void {
        this.bigScreen = new Screen(
            this.experience.resources.items.bigScreenModel.scene.children[0],
            "/assets/bigScreenImage.jpg"
        )
        this.smallScreen = new Screen(
            this.experience.resources.items.smallScreenModel.scene.children[0],
            "/assets/smallScreenImage.jpg"
        )
    }

    setChair(): void {
        this.chair = new RotatingChair()
    }

    setCoffee(): void {
        this.coffeeSteam = new CoffeeSteam()
    }

    setRaycaster(): void {
        this.raycaster = new Raycaster()
    }

    resize(): void {}

    update(): void {
        if (this.chair) this.chair.update()
        if (this.coffeeSteam) this.coffeeSteam.update()
        // if (this.bigScreen) this.bigScreen.update()
        if (this.raycaster) this.raycaster.update()
    }

    destroy() {}
}
