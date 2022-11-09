import { navigate } from "../components/navigations/navigationRef"
import { contants } from "../utils/contants"

const navigateHome = () => {
    navigate(contants.screen.HOME)
}

export default navigateHome