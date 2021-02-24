class TwoSum{
    constructor() {
        this.closeProblem()
    }
    static renderInput()  {
        const twoSumContainer = document.getElementById('first-algorithm')
        let br = document.createElement('br')

        const div = document.createElement('div')
        div.className = 'problem'

        const header2 = document.createElement('h2')
        header2.innerHTML = `Test 1`

        const input1 = document.createElement('input')
        input1.className = 'problem-input-1'
        input1.setAttribute('placeholder', `Nums`)

        const input2 = document.createElement('input')
        input2.className = 'problem-input-2'
        input2.setAttribute('placeholder', `Target`)

        const close = document.createElement('button')
        // close.addEventListener('click', )
        close.className = 'close'
        close.innerHTML = `Close`


        twoSumContainer.appendChild(div)
        twoSumContainer.appendChild(br)
        div.appendChild(header2)
        div.appendChild(input1)
        div.appendChild(input2)
        div.appendChild(close)
        addTwoSum.style.display = 'none'
        // div.appendChild()
    }
}