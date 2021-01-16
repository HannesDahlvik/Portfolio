export default class AboutMeText {
    constructor() {
        this.initText()
    }

    initText(): void {
        const aboutMeTextElement: any = document.getElementById('about-me-text')
        aboutMeTextElement.innerHTML = `I'm ${this.calcBirthday('2002/05/29')} years old and I live in Terjärv Finland. I'm a junior web
            developer wanting to
            explore the world of web development. Currently I know HTML, CSS and learning JavaScript, but in the
            future I want to learn more than just that.`
    }

    calcBirthday(dateString: string): string {
        const today: Date = new Date()
        const birthDate: Date = new Date(dateString)
        let age: number = today.getFullYear() - birthDate.getFullYear()
        const m: number = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--
        return String(age)
    }
}