import {
    Observer,
    observe
} from "../../src/observer/dep"
import Dep from '../../src/observer/dep'

describe('Observer test', function() {
    it('observing obj prop change', function() {
        const obj = { a:1, b:{a:1}, c:NaN}
        observe(obj)

        const watcher = {
            deps: [],
            addDep(dep) {
                this.deps.push(dep)
                dep.addSub(this)
            },
            update : jasmine.createSpy()
        }

        Dep.target = watcher
        obj.a
        Dep.target = null
        expect(watcher.deps.length).toBe(1)
        obj.a = 3
        expect(watcher.update.calls.count()).toBe(1)
        watcher.deps = []
    });
});