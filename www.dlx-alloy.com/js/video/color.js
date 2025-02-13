var darkColor = window.matchMedia('(prefers-color-scheme: dark)');
var link = document.createElement("link");
link.rel = "stylesheet";
link.id = "colorid";
link.type = "text/css";
link.href = colorUrl + "/images/video/color.css";
function darkModeHandler() {
  if (darkColor.matches) {
    // 深色
    document.querySelector("body").setAttribute("white-data", "dark");
    document.querySelector("#colorid") && document.querySelector("#colorid").remove();
  } else {
    // 浅色
    document.querySelector("body").setAttribute("white-data", "white");
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}
// 判断当前模式
darkModeHandler()
// 监听模式变化
darkColor.addListener(darkModeHandler)