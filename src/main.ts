import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
      <h1>Favorite Video Games</h1>
      <p>The world of entertainment, creativity, and social connection with video games, where fun meets skill development for all ages!</p>
    </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

      <a href="https://www.counter-strike.net/" class="card" target="_blank">
      <img src="/imgs/CS2.jpg" class="img" alt="" />
      <div class="description">
        <h3>Counter Strike 2</h3>
        <p>Dive into the future of FPS gaming with Counter-Strike 2: upgraded visuals, fresh maps, and intense action</p>
      </div>
    </a>

    <a href="https://www.ubisoft.com/en-gb/game/rainbow-six/siege" class="card" target="_blank">
      <img src="/imgs/R6.jpg" class="img" alt="" />
      <div class="description">
        <h3>Rainbow Six: Siege</h3>
        <p>Tactical. Team-based. Thrilling FPS action.</p>
      </div>
    </a>

    <a href="https://jp.finalfantasyxvi.com/" class="card" target="_blank">
      <img src="/imgs/FF16.jpg" class="img" alt="" />
      <div class="description">
        <h3>Final Fantasy XVI</h3>
        <p>Immerse yourself in a visually stunning and epic RPG experience</p>
      </div>
    </a>
    
    <a href="https://www.elderscrollsonline.com/ja/home" class="card" target="_blank">
      <img src="/imgs/The Elder Scrolls.jpg" class="img" alt="" />
      <div class="description">
        <h3>The Elder Scrolls Online</h3>
        <p>Immerse yourself in the multiplayer RPG adventure with endless possibilities and epic quests</p>
      </div>
    </a>
    
    <a href="https://www.ea.com/games/apex-legends?isLocalized=true" class="card" target="_blank">
      <img src="/imgs/APEX.jpg" class="img" alt="" />
      <div class="description">
        <h3>Apex Legend</h3>
        <p>Action-packed battle royale featuring diverse legends, unique abilities, and intense squad-based competition</p>
      </div>
    </a>

    <a href="https://www.dota2.com/home" class="card" target="_blank">
      <img src="/imgs/DOTA.jpg" class="img" alt="" />
      <div class="description">
        <h3>DOTA 2</h3>
        <p>Dive into intense team battles, master unique heroes, and conquer the online arena in this dynamic multiplayer experience.</p>
      </div>
    </a>
        
      </div>
    </div>
  </div>

  <div class="prev-projects">

    <div class="header">
      <div class="title">
      <h1>Impressive Books</h1>
      <p>A Good book is a mentor and friend</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

      <a href="https://www.goodreads.com/book/show/34569357-remembrance-of-earth-s-past?from_search=true&from_srp=true&qid=5lDJC1DfjA&rank=2" class="card" target="_blank">
      <img src="/imgs/book1.jpg" class="img" alt="" />
      <div class="description">
        <h3>The Three-Body Problem</h3>
        <p>"Wildly imaginative, really interesting." —President Barack Obama</p>
      </div>
    </a>

    <a href="https://www.goodreads.com/book/show/152893.Death_and_the_Penguin" class="card" target="_blank">
      <img
        src="/imgs/book2.jpg"
        class="img"
        alt=""
      />
      <div class="description">
        <h3>Death_and_the_Penguin</h3>
        <p>“To every time, its own normality.”</p>
      </div>
    </a>

    <a href="https://www.goodreads.com/book/show/61439040-1984" class="card" target="_blank">
      <img
        src="/imgs/book3.jpg"
        class="img"
        alt=""
      />
      <div class="description">
        <h3>1984</h3>
        <p>WAR IS PEACE. FREEDOM IS SLAVERY. IGNORANCE IS STRENGTH.</p>
      </div>
    </a>

    <a href="https://www.goodreads.com/book/show/61718053-happy-place?from_choice=true" class="card" target="_blank">
      <img src="/imgs/book4.jpg" class="img" alt="" />
      <div class="description">
        <h3>Happy Place</h3>
        <p>They broke up six months ago. And still haven’t told their best friends.</p>
      </div>
    </a>
    </div>
  </div>
</div>
`

export { experience }
