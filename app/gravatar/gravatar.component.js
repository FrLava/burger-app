import template from './gravatar.component.html'
import md5 from 'md5'
import './gravatar.component.css'

class controller {
    constructor () {
        this.displayGravatar = true
    }

    $onInit () {
        this.md5 = md5(this.email)
    }

    toggleGravatar () {
        this.displayGravatar = !this.displayGravatar
    }

    clickWord (form) {
        if (form.$invalid) return
        this.onTalk({
            $event: this.text
        })
    }

}

export let GravatarComponent = {
    template,
    controller,
    bindings: {
        email: '<',
        onTalk: '&'
        }
}