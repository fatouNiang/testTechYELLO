import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testTechYELLO';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  ngOnInit(): void {
    initFlowbite();

    // document.getElementById("menuToggle").addEventListener("click", function () {
    //   const menu = document.getElementById("menu");
    //   menu.classList.toggle("hidden");
    //   menu.classList.toggle("flex");
    // });

  }
  // onClick(){

  //   document.getElementById("menuToggle").addEventListener("click", function () {
  //     const menu = document.getElementById("menu");
  //     menu.classList.toggle("hidden");
  //     menu.classList.toggle("flex");
  //   });
  // }

  setDark(val: string): void {
    const moon = document.querySelector(".moon");
    const sun = document.querySelector(".sun");
    if(val === "dark"){
      document.documentElement.classList.add('dark');
      if (moon) moon.classList.add("hidden");
      if (sun) sun.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove('dark');
      if (sun) sun.classList.add("hidden");
      if (moon) moon.classList.remove("hidden");
    }
  }

  openNav(): void {
    const sidebar = document.querySelector("aside");
    const maxSidebar = document.querySelector(".max");
    const miniSidebar = document.querySelector(".mini");
    const maxToolbar = document.querySelector(".max-toolbar");
    const logo = document.querySelector('.logo');
    const content = document.querySelector('.content');
    if (sidebar && maxSidebar && miniSidebar && maxToolbar && logo && content)
    {
      if(sidebar.classList.contains('-translate-x-48')){
        // max sidebar
        sidebar.classList.remove("-translate-x-48");
        sidebar.classList.add("translate-x-none");
        maxSidebar.classList.remove("hidden");
        maxSidebar.classList.add("flex");
        miniSidebar.classList.remove("flex");
        miniSidebar.classList.add("hidden");
        maxToolbar.classList.add("translate-x-0");
        maxToolbar.classList.remove("translate-x-24","scale-x-0");
        logo.classList.remove("ml-12");
        content.classList.remove("ml-12");
        content.classList.add("ml-12","md:ml-60");
      } else {
        // mini sidebar
        sidebar.classList.add("-translate-x-48");
        sidebar.classList.remove("translate-x-none");
        maxSidebar.classList.add("hidden");
        maxSidebar.classList.remove("flex")
        miniSidebar.classList.add("flex")
        miniSidebar.classList.remove("hidden")
        maxToolbar.classList.add("translate-x-24","scale-x-0")
        maxToolbar.classList.remove("translate-x-0")
        logo.classList.add('ml-12')
        content.classList.remove("ml-12","md:ml-60")
        content.classList.add("ml-12")

      }
    }
  }

}
