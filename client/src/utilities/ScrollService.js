import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from 'rxjs';

export default class ScrollService {
    /* SINGLETON CLASS INSTANCE */
    static scrollHandler = new ScrollService();

    /* Lets instantiate the subject BROADCASTERS */
    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    //lets have a constructor here and add the scroll event to window
    constructor() {
        /* ADD SCROLL EVENT TO WINDOW */
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewPort);
    }

    /* SCROLL TO HIRE ME / CONTACT ME SCREEN */
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" })
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" })
    }
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible
            default:
                return false
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1)
            return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM)
                continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");
            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}