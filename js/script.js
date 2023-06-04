function presetMenuBtns(){
  const menuBtns = document.querySelectorAll("#menu-btn");

  menuBtns.forEach((menuBtn, index) => {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
  
      const tabBars = document.querySelectorAll("#tab-bar");
      tabBars[index].classList.toggle("active")
    });
  
    menuBtn.addEventListener("mouseover", (e) => {
      const btnRect = menuBtn.getBoundingClientRect();
  
      let x = (btnRect.x + 60) + 'px',
          y = (btnRect.y) + 'px';
  
      const tooltips = document.querySelectorAll(".menu-tooltip");
  
      tooltips[index].style.top = y;
      tooltips[index].style.left = x;
    });
  });
}

let addingMenu = false

function presetAddMenuBtn() {
  const addMenuBtn = document.querySelector(".menu-add-btn");

  addMenuBtn.addEventListener("mouseover", () => {
    const btnRect = addMenuBtn.getBoundingClientRect();

    let x = (btnRect.x + 60) + 'px',
        y = (btnRect.y) + 'px';

    const tooltips = document.querySelectorAll(".menu-tooltip");

    tooltips[tooltips.length - 1].style.top = y;
    tooltips[tooltips.length - 1].style.left = x;
  });

  addMenuBtn.addEventListener("click", () => {
    disableSearchingPanel();

    disableSettingsPanel();

    addingMenu = true;
    document.querySelector(".add-menu-console").classList.toggle("active");
  });
}

function presetAddMenuConfirmBtn() {
  const addMenuConfirmBtn = document.querySelector(".add-menu-confirm-btn");

  addMenuConfirmBtn.addEventListener("click", () => {
    const menuName = document.querySelector(".add-menu-input").value;
    const menuIconIMG = document.querySelector(".icon-select-container img");
    if (!menuIconIMG) return;

    const menuIcon = menuIconIMG.src;

    let menuBtns = document.querySelectorAll(".menu-btn");
  
    let contents = ""
  
    for (let i = 0; i < menuBtns.length - 1; i++) {
      contents += menuBtns[i].outerHTML;
    }

    // menuBtns.forEach(element => {
    //   contents += element.outerHTML;
    // });
  
    const menuIconChunks = menuIcon.split('/');
    const menuIconTitle = menuIconChunks[menuIconChunks.length - 1].split('_')[0];

    document.querySelector(".menu-bar").innerHTML = contents + 
    `
    <div class="menu-btn ${menuName}-menu">
      <div class="image-content">
        <div class="menu-cover ${menuName}-menu-cover" id="menu-btn">
          <img src=${menuIcon} alt="" class="menu-icon-img ${menuName}-icon ${menuIconTitle}-icon">
        </div>
      </div>
  
      <div class="tooltip menu-tooltip">${menuName}</div>
    </div>
    ` + 
    `
    <div class="menu-btn menu-add-btn">
      <div class="image-content">
        <img src="images/menu/add_white.png" alt="" class="menu-icon-img add-icon">
      </div>
  
      <div class="tooltip menu-tooltip">Add menu</div>
    </div>
    `;
  
    contents = ""
  
    let tabBars = document.querySelectorAll("#tab-bar");
  
    tabBars.forEach(element => {
      contents += element.outerHTML;
    });

    document.querySelector(".tab-bar-container").innerHTML = contents + 
    `
    <div class="tab-bar code-tab-bar" id="tab-bar">
      <div class="scroll-btn">
        <img src="images/tab/left_arrow_white.png" alt="" class="arrow-btn left-arrow-btn" style="top: calc(44px + ${menuBtns.length - 1} * 60px);">
        <img src="images/tab/right_arrow_white.png" alt="" class="arrow-btn right-arrow-btn" style="top: calc(44px + ${menuBtns.length - 1} * 60px);">
      </div>
  
      <div class="app-add-btn">
        <div class="image-content">
          <img src="images/menu/add_white.png" alt="" class="add-icon">
          <span class="tooltip app-tooltip">Add app</span>
        </div>
      </div>
    </div>
    `;
  
    presetMenuBtns();
  
    presetArrowBtnsContainer();
  
    presetAppIcons();
  
    presetTabBars();
  
    document.querySelector(".add-menu-console").classList.remove("active");
    document.querySelector(".add-menu-input").value = "";
    document.querySelector(".icon-select-container").innerHTML = "";
  
    presetAddMenuBtn();
  });
}

function presetAddMenuCancelBtn() {
  const addMenuCancelBtn = document.querySelector(".add-menu-cancel-btn");

  addMenuCancelBtn.addEventListener("click", () => {
    document.querySelector(".add-menu-console").classList.remove("active");
    document.querySelector(".add-menu-input").value = "";
    document.querySelector(".icon-select-container").innerHTML = "";
  });
}

function presetIconSelectBtn() {
  const iconSelectBtn = document.querySelector(".icon-select-container");

  iconSelectBtn.addEventListener("click", () => {
    document.querySelector(".icon-selection-console").classList.toggle("active");
  });
}

function presetIconImgs() {
  const iconImgs = document.querySelectorAll("#menu-icon");

  iconImgs.forEach(iconImg => {
    iconImg.addEventListener("click", () => {
      document.querySelector(".icon-select-container").innerHTML = 
      `<img src=${iconImg.src} alt="" class="icon-select">`;
  
      document.querySelector(".icon-selection-console").classList.toggle("active");
    });
  });
}

function presetArrowBtnsContainer() {
  const arrowBtnsContainers = document.querySelectorAll(".scroll-btn");

  arrowBtnsContainers.forEach(arrowBtnsContainer => {
    arrowBtnsContainer.children[0].addEventListener("click", () => {
      arrowBtnsContainer.parentElement.scrollBy(-50, 0);
    });
    arrowBtnsContainer.children[1].addEventListener("click", () => {
      arrowBtnsContainer.parentElement.scrollBy(50, 0);
    });
  });
}

function presetAppIcons() {
  const appIcons = document.querySelectorAll(".app-icon");

  appIcons.forEach((appIcon, index) => {
    appIcon.addEventListener("mouseover", () => {
      // console.log(index);
  
      const iconImg = appIcon.querySelector(".app-icon-img");
      const iconImgRect = iconImg.getBoundingClientRect();
  
      const tooltip = appIcon.querySelector(".app-tooltip");
      const tooltipRect = tooltip.getBoundingClientRect();
  
      tooltip.style.top = (iconImgRect.y + 50) + 'px';
      tooltip.style.left = iconImgRect.x + (iconImgRect.width - tooltipRect.width) / 2 + 'px';
    });
  });
}

function presetTabBars() {
  const tabBars = document.querySelectorAll("#tab-bar");

  tabBars.forEach(tabBar => {
    const addAppBtn = tabBar.querySelector(".app-add-btn");
  
    addAppBtn.addEventListener("mouseover", () => {
      const addAppBtnRect = addAppBtn.getBoundingClientRect();
  
      const tooltip = addAppBtn.querySelector(".app-tooltip");
      const tooltipRect = tooltip.getBoundingClientRect();
  
      tooltip.style.top = (addAppBtnRect.y + 50) + 'px';
      tooltip.style.left = addAppBtnRect.x + (addAppBtnRect.width - tooltipRect.width) / 2 + 'px';
    });
  });
}

let searching = false;
let setting = false

function presetSearchIcon() {
  const searchIcon = document.querySelector(".search");

  searchIcon.addEventListener("mouseover", () => {
    const searchIconRect = searchIcon.getBoundingClientRect();
    const tooltip = searchIcon.querySelector(".funciton-tooltip");
    const tooltipRect = tooltip.getBoundingClientRect();
  
    tooltip.style.top = searchIconRect.y + 'px';
    tooltip.style.left = (searchIconRect.x - tooltipRect.width - 20) + 'px';
  });

  searchIcon.addEventListener("click", () => {
    disableAddMenuPanel();

    disableSettingsPanel();
    
    searching = true;
    const searchingPanel = document.querySelector(".searching-panel");
    searchingPanel.classList.toggle("active");

    
  });
}

function presetSettingsIcon() {
  const settingsIcon = document.querySelector(".settings");

  settingsIcon.addEventListener("mouseover", () => {
    const settingsIconRect = settingsIcon.getBoundingClientRect();
    const tooltip = settingsIcon.querySelector(".funciton-tooltip");
    const tooltipRect = tooltip.getBoundingClientRect();
  
    tooltip.style.top = settingsIconRect.y + 'px';
    tooltip.style.left = (settingsIconRect.x - tooltipRect.width - 20) + 'px';
  });

  settingsIcon.addEventListener("click", () => {
    disableAddMenuPanel();

    disableSearchingPanel();

    setting = true
    const settingsPanel = document.querySelector(".settings-panel");
    settingsPanel.classList.toggle("active");

    const themePicker = document.querySelector(".theme-picker");
    themePicker.classList.remove("active");
  });
}

function presetSearchAppInput() {
  const searchAppInput = document.querySelector(".search-app-input");

  searchAppInput.addEventListener("keyup", (e) => {
    const existingAppContaniners = document.querySelectorAll(".app-icon");
  
    let contents = ""
  
    existingAppContaniners.forEach(existingAppContaniner => {
      const img = existingAppContaniner.querySelector("img").src;
      const appName = existingAppContaniner.querySelector("span").innerHTML;
  
      const loweredInputValue = searchAppInput.value.toLowerCase();
      const loweredAppName = appName.toLowerCase();
  
      if (e.key.length == 1 || e.key == "Backspace"){
        if (loweredAppName.includes(loweredInputValue)){
          contents += 
          `
          <div class="searched-app-container">
                <img src=${img} alt="">
                <span class="tooltip">${appName}</span>
              </div>
          `;
        }
      }
    });
  
    document.querySelector(".qualified-apps-contaniner").innerHTML = contents;
    presetSearchedAppContainers();
  });  
}

function presetSearchedAppContainers(){
  const searchedAppContainers = document.querySelectorAll(".searched-app-container");

  searchedAppContainers.forEach(searchedAppContainer => {
    const searchedAppContainerRect = searchedAppContainer.getBoundingClientRect();
    const tooltip = searchedAppContainer.querySelector(".tooltip");
    const tooltipRect = tooltip.getBoundingClientRect();
  
    tooltip.style.top = (searchedAppContainerRect.y + 60) + 'px';
    tooltip.style.left = (searchedAppContainerRect.x + (searchedAppContainerRect.width - tooltipRect.width) / 2) + 'px';
  });
}

function presetThemePicker(){
  const themeSetting = document.querySelector(".theme-setting");

  themeSetting.addEventListener("click", () => {
    const themeSettingRect = themeSetting.getBoundingClientRect();

    const themePicker = document.querySelector(".theme-picker");
    themePicker.classList.toggle("active");
    
    const themePickerRect = themePicker.getBoundingClientRect();

    themePicker.style.top = (themeSettingRect.y + 100) + 'px';
    themePicker.style.left = (themeSettingRect.x + (themeSettingRect.width - themePickerRect.width) / 2) + 'px';
  });

  const themeColors = document.querySelectorAll("#theme-color");
  themeColors.forEach((element, index) => {
    element.addEventListener("click", () => {
      themeColors.forEach(element => {
        element.classList.remove("active");
      });

      element.classList.add("active");

      let style = document.documentElement.style;
      const browserIcons = document.querySelectorAll(".browser-icon");
      const codeIcons = document.querySelectorAll(".code-icon");
      const addIcons = document.querySelectorAll(".add-icon");
      const paintIcons = document.querySelectorAll(".paint-icon");
      const searchIcon = document.querySelector(".search-icon");
      const settingsIcon = document.querySelector(".settings-icon");
      const brushIcon = document.querySelector(".brush-icon");
      const leftArrowIcons = document.querySelectorAll(".left-arrow-btn");
      const rightArrowIcons = document.querySelectorAll(".right-arrow-btn");

      switch (index) {
        case 0:
          style.setProperty("--base-color", "#171520");
          style.setProperty("--second-layer-color", "#262335");
          style.setProperty("--highlight-color", "#4B4364");
          style.setProperty("--outline-color", "#9590A3");
          style.setProperty("--text-color", "#fff");

          browserIcons.forEach(element => {
            element.src = "images/menu/browser_white.png";
          });
          codeIcons.forEach(element => {
            element.src = "images/menu/code_white.png";
          });
          addIcons.forEach(element => {
            element.src = "images/menu/add_white.png";
          });
          paintIcons.forEach(element => {
            element.src = "images/menu/paint_white.png";
          });
          leftArrowIcons.forEach(element => {
            element.src = "images/tab/left_arrow_white.png"
          });
          rightArrowIcons.forEach(element => {
            element.src = "images/tab/right_arrow_white.png"
          });
          searchIcon.src = "images/function/search_white.png"
          settingsIcon.src = "images/function/settings_white.png"
          brushIcon.src = "images/function/themes_white.png"

          break;
        case 1:
          style.setProperty("--base-color", "#FFDFC9");
          style.setProperty("--second-layer-color", "#FFF8D5");
          style.setProperty("--highlight-color", "#FFF5FA");
          style.setProperty("--outline-color", "#FFF8D5");
          style.setProperty("--text-color", "#000");

          browserIcons.forEach(element => {
            element.src = "images/menu/browser_black.png";
          });
          codeIcons.forEach(element => {
            element.src = "images/menu/code_black.png";
          });
          addIcons.forEach(element => {
            element.src = "images/menu/add_black.png";
          });
          paintIcons.forEach(element => {
            element.src = "images/menu/paint_black.png";
          });
          leftArrowIcons.forEach(element => {
            element.src = "images/tab/left_arrow_black.png"
          });
          rightArrowIcons.forEach(element => {
            element.src = "images/tab/right_arrow_black.png"
          });
          searchIcon.src = "images/function/search_black.png"
          settingsIcon.src = "images/function/settings_black.png"
          brushIcon.src = "images/function/themes_black.png"
          break;
      }
    });
  });
}

function disableSettingsPanel(){
  if (setting){
    setting = false
    const settingsPanel = document.querySelector(".settings-panel");
    settingsPanel.classList.remove("active");

    const themePicker = document.querySelector(".theme-picker");
    themePicker.classList.remove("active");
  }
}

function disableSearchingPanel(){
  if (searching){
    searching = false
    const searchingPanel = document.querySelector(".searching-panel");
    searchingPanel.classList.remove("active");
  }
}

function disableAddMenuPanel(){
  if (addingMenu){
    addingMenu = false
    document.querySelector(".add-menu-console").classList.remove("active");

    document.querySelector(".icon-selection-console").classList.remove("active");
  }
}

presetMenuBtns();
presetAddMenuBtn();
presetAddMenuConfirmBtn();
presetAddMenuCancelBtn();
presetIconSelectBtn();
presetIconImgs();
presetArrowBtnsContainer();
presetAppIcons();
presetTabBars();
presetSearchIcon();
presetSettingsIcon();
presetSearchedAppContainers();
presetSearchAppInput();
presetThemePicker();