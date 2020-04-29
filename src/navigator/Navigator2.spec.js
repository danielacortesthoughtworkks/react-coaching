import {navigateToFaq, navigateToHome} from "./Navigator"
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
