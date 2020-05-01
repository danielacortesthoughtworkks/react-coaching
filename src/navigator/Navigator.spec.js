import {navigateToFaq, navigateToHome, navigateToGuides, navigateToRoadmaps, navigateToSponsors} from "./Navigator"
import { history } from '../App'

jest.mock('../App')
history.push = jest.fn()

afterEach(() => {
    history.push.mockClear()
})

test('should call history.push faq', () => {
    navigateToFaq()

    expect(history.push).toHaveBeenCalledWith('/faq')
}) 

test('should call /', () => {
    navigateToHome()

    expect(history.push).toHaveBeenCalledWith('/')
})

test('should call history.push guides', () => {
    navigateToGuides()

    expect(history.push).toHaveBeenCalledWith('/guides')
})

test('should call history.push roadmaps', () => {
    navigateToRoadmaps()

    expect(history.push).toHaveBeenCalledWith('/roadmaps')
})

test('should call history.push sponsors', () => {
    navigateToSponsors()

    expect(history.push).toHaveBeenCalledWith('/sponsors')
})
