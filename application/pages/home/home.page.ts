import { step } from "../../utils/allureStep"
import { TopLinks } from "../components/toplinks.component"


export class HomePage {
    topLinks: TopLinks = new TopLinks()

    @step('open all for category')
    openAllForCategory(categoryName: string) {
        throw new Error('test')
        $(`a=${categoryName}`).click()

        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()

        openedSeeAllLink.click()
    }
}