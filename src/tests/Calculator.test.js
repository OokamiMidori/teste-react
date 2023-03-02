const { render, screen } = require("@testing-library/react")
import userEvent from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("Testando o Calculator", () => {
    test("Tem que renderizar o botão +", () => {
        render(<Calculator />)
        const buttonSoma = screen.getByText("+")
        expect(buttonSoma).toBeInTheDocument()
    })

    test("Tem que renderizar o botão -", () => {
        render(<Calculator />)
        const button = screen.getByText("-")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão +", () => {
        render(<Calculator />)
        const button = screen.getByText("*")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão /", () => {
        render(<Calculator />)
        const button = screen.getByText("/")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 0", () => {
        render(<Calculator />)
        // screen.logTestingPlaygroundURL()
        const button = screen.getByRole('button', {
            name: /0/i
          })
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 1", () => {
        render(<Calculator />)
        const button = screen.getByText("1")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 2", () => {
        render(<Calculator />)
        const button = screen.getByText("2")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 3", () => {
        render(<Calculator />)
        const button = screen.getByText("3")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 4", () => {
        render(<Calculator />)
        const button = screen.getByText("4")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 5", () => {
        render(<Calculator />)
        const button = screen.getByText("5")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 6", () => {
        render(<Calculator />)
        const button = screen.getByText("6")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 7", () => {
        render(<Calculator />)
        const button = screen.getByText("7")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 8", () => {
        render(<Calculator />)
        const button = screen.getByText("8")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão 9", () => {
        render(<Calculator />)
        const button = screen.getByText("9")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão C", () => {
        render(<Calculator />)
        const button = screen.getByText("C")
        expect(button).toBeInTheDocument()
    })

    test("Tem que renderizar o botão .", () => {
        render(<Calculator />)
        const button = screen.getByText(".")
        expect(button).toBeInTheDocument()
    })

    test("Tem que retornar o valor multiplicado corretamente", async () => {
        const user = userEvent.setup()
        render(<Calculator />)
        const buttonFive = screen.getByText("5")
        const buttonTwo = screen.getByText("2")
        const buttonMulti = screen.getByText("*")
        const buttonEqual = screen.getByText("=")
        // screen.debug()
        await user.click(buttonFive)
        await user.click(buttonMulti)
        await user.click(buttonTwo)
        await user.click(buttonEqual)
        //screen.debug()
        const value = screen.getByText("10")
        expect(value).toBeInTheDocument()
    })

    test("Durante uma operação concatenada, as ordens devem ser respeitadas", async()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        const buttonFive = screen.getByText("5")
        const buttonTwo = screen.getByText("2")
        const buttonMulti = screen.getByText("*")
        const buttonEqual = screen.getByText("=")
        const buttonOne = screen.getByText("1")
        const buttonZero = screen.getByRole('button', {
            name: /0/i
          })
        const buttonSoma = screen.getByText("+")
        await user.click(buttonFive)
        await user.click(buttonMulti)
        await user.click(buttonTwo)
        await user.click(buttonSoma)
        await user.click(buttonOne)
        await user.click(buttonZero)
        await user.click(buttonEqual)
        const result = screen.getByText(/20/i)
        screen.logTestingPlaygroundURL()
        expect(result).toBeInTheDocument()
    })

    test("Deve retornar o valor dividido corretamente", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        const buttonTwo = screen.getByText("2")
        const buttonFour = screen.getByText("4")
        const buttonDiv = screen.getByText("/")
        const buttonEqual = screen.getByText("=")
        await user.click(buttonTwo)
        await user.click(buttonFour)
        await user.click(buttonDiv)
        await user.click(buttonTwo)
        await user.click(buttonEqual)

        const result = screen.getByText("12")
        expect(result).toBeInTheDocument()
    })

    test("Deve retornar NaN", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        const buttonZero = screen.getByRole('button', {
            name: /0/i
          })
        const buttonFour = screen.getByText("4")
        const buttonDiv = screen.getByText("/")
        const buttonEqual = screen.getByText("=")
        await user.click(buttonFour)
        await user.click(buttonDiv)
        await user.click(buttonZero)
        await user.click(buttonEqual)
        //screen.logTestingPlaygroundURL()
        const value = screen.getByText(/infinity/i)
        expect(value).toBeInTheDocument()
    })

    test("Deve retornar numeros somados corretamente", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        const buttonTwo = screen.getByText("2")
        const buttonFour = screen.getByText("4")
        const buttonSoma = screen.getByText("+")
        const buttonEqual = screen.getByText("=")
        await user.click(buttonTwo)
        await user.click(buttonTwo)
        await user.click(buttonSoma)
        await user.click(buttonFour)
        await user.click(buttonEqual)
        const result = screen.getByText("26")
        expect(result).toBeInTheDocument()
    })

    test("Deve retornar numero subtraidos corretamente", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        const buttonTwo = screen.getByText("2")
        const buttonFour = screen.getByText("4")
        const buttonSub = screen.getByText("-")
        const buttonEqual = screen.getByText("=")
        await user.click(buttonFour)
        await user.click(buttonTwo)
        await user.click(buttonSub)
        await user.click(buttonTwo)
        await user.click(buttonEqual)
        const result = screen.getByText("40")
        expect(result).toBeInTheDocument()
    })

})