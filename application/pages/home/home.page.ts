import { step } from "../../utils/allureStep"
import { TopLinks } from "../components/toplinks.component"


export class HomePage {
    topLinks: TopLinks = new TopLinks()

    @step('open all for category')
    openAllForCategory(categoryName: string) {
        $(`a=${categoryName}`).click()

        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()

        openedSeeAllLink.click()
    }
}