import styles from './style/MovingBg.module.css'
function MovingBg(){

    const maxWidth = window.screen.width-100;
    const maxHeight = window.screen.height-100;

    function Random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    function Shadows(amount){
      let shadow = "";
      //shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) +    "px " + "rgb(255,"+ Random(0, 256) + "," + Random(0, 256) + "), ";
      for(let i = 0; i < amount; i++){
        shadow += `${Random(0, maxWidth)}px ${Random(0, maxHeight)}px rgb(255,${Random(0, 256)},${Random(0, 256)}), `;
      }
      //shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) + "px " + "rgb(255,"+ Random(0, 256) + "," + Random(0, 256) + ")";
      shadow += `${Random(0, maxWidth)}px ${Random(0, maxHeight)}px rgb(255,${Random(0, 256)},${Random(0, 256)})`;
      return(shadow);
    }

    for(let i = 1; i <= 3; i++){
      document.documentElement.style.setProperty('--shadows' + i, Shadows(100));
    }

    return(
        <div id="space">
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
        </div>
    )
}
export default MovingBg