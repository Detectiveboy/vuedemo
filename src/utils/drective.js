import Vue from 'vue'
Vue.directive('test', {
    bind(el, binding, vnode, oldvnode) {
        console.log('bind')
    },
    unbind(el, binding, vnode, oldvnode) {
        console.log('unbind')
    },
    inserted(el, binding, vnode, oldvnode) {
        console.log('inserted')
    },
    update(el, binding, vnode, oldvnode) {
        console.log('update')
    }
})
Vue.directive('drag', {
    inserted(el) {
        let oDiv = el; //当前元素
        oDiv.onmousedown = function (e) {
            //鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDiv.offsetLeft
            let disY = e.clientY - oDiv.offsetTop
            document.onmousemove = function (e) {
                //通过事件委托，计算移动的距离 
                let l = e.clientX - disX < 0 ? 0 : e.clientX - disX
                let t = e.clientY - disY < 0 ? 0 : e.clientY - disY
                //移动当前元素 
                oDiv.style.left = l + 'px';
                oDiv.style.top = t + 'px';
            };
            document.onmouseup = function (e) {
                document.onmousemove = null
                document.onmouseup = null
            }
        }

    }
})