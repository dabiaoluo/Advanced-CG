import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
        <h1>Nowadays in Tokyo</h1>
        <p>Learning in Waseda</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <a href="url 1" class="card" target="_blank">
          <img src="/imgs/game1.jpg" class="img" alt="" />
          <div class="description">
            <h3>King of Bots</h3>
            <p>Ai battle platform supporting PvE and PvP</p>
          </div>
        </a>

        <a href="url 2" class="card" target="_blank">
          <img src="/imgs/game2.jpg" class="img" alt="" />
          <div class="description">
            <h3>[Key: Board]</h3>
            <p>An iOS keyboard for code editing</p>
          </div>
        </a>

        <a href="url 3" class="card" target="_blank">
          <img src="/imgs/game3.jpg" class="img" alt="" />
          <div class="description">
            <h3>Vue Chemistry</h3>
            <p>Reactified JavaScript functions for Vue</p>
          </div>
        </a>
        
        <a href="url 4" class="card" target="_blank">
          <img src="/imgs/game4.jpg" class="img" alt="" />
          <div class="description">
            <h3>Three.js Starting Template</h3>
            <p>Three.js starting template based on TS and Vite</p>
          </div>
        </a>
        
        <a href="url 5" class="card" target="_blank">
          <img src="/imgs/game5.jpg" class="img" alt="" />
          <div class="description">
            <h3>Questopia</h3>
            <p>3D room · Personal website · Online portfolio</p>
          </div>
        </a>

        <a href="url 6" class="card" target="_blank">
          <img src="/imgs/game6.jpg" class="img" alt="" />
          <div class="description">
            <h3>Pkg-Desc</h3>
            <p>List details of all dependencies packages</p>
          </div>
        </a>
        
      </div>
    </div>
  </div>

  <div class="prev-projects">

    <div class="header">
      <div class="title">
        <h1>Previous days in China</h1>
        <p>Life in Sichuan University</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <a href="url 1" class="card" target="_blank">
          <img src="/imgs/book1.png" class="img" alt="" />
          <div class="description">
            <h3>Pendulum Parking</h3>
            <p>Maximize the value of idle parking space</p>
          </div>
        </a>

        <a href="url 2" class="card" target="_blank">
          <img
            src="/imgs/book2.jpg"
            class="img"
            alt=""
          />
          <div class="description">
            <h3>Archimason</h3>
            <p>Online architectral design assistant</p>
          </div>
        </a>

        <a href="url 3" class="card" target="_blank">
          <img
            src="/imgs/book3.jpg"
            class="img"
            alt=""
          />
          <div class="description">
            <h3>Protect Winterfell</h3>
            <p>Reconstruction of castle wall defense system</p>
          </div>
        </a>

        <a href="url 4" class="card" target="_blank">
          <img src="/imgs/book4.png" class="img" alt="" />
          <div class="description">
            <h3>Relevator</h3>
            <p>Taking elevator in an interesting way</p>
          </div>
        </a>

      </div>
    </div>
  </div>
`

export { experience }
