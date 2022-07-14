let posts = {
    IT: ['main administrator', 'developer', 'administrator'],
    STO: ['nachalnik STO', 'spetsialist STO'],
    BUX: ['glavniy BUX', 'pomoshnik BUX'],
}

let department = document.getElementById('employeeDepartment')
let post = document.getElementById('employeePost')

department.addEventListener('change', function () {
    let selected_option = posts[this.value]
    while (post.options.length > 0) {
        post.options.remove(0)
    }

    Array.from(selected_option).forEach(function (el) {
        let option = new Option(el, el)
        post.appendChild(option)
    })
})
