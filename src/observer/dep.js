var uid = 0

export default function Dep(argument) {
    this.id = uid++
    this.subs = []
}