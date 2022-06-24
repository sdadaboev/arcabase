import axios from 'axios'

export const homepage = (req, res) => {
    res.render('index')
}

export const createDevicePage = (req, res) => {
    res.render('createDevicePage')
}

export const choosePageDeviceOrFurniture = (req, res) => {
    res.render('deviceOrFurniture')
}

export const updateDevicePage = async (req, res) => {
    try {
        const idishnik = req.query.id
        const deviceData = await axios.get(
            `http://localhost:${
                process.env.PORT || 5000
            }/device/one-device/${idishnik}`,
        )
        res.render('updateDevicePage', { device: deviceData.data })
        console.log('--------data----', deviceData.data)
    } catch (error) {
        console.log(error)
    }
}

// export const obnovit = async (req ,res) =>{
//   try {
//     const obnovitQil = await axios({
//       method: 'put',
//       url: 'http://localhost:3000/device/update-device-button/id'
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

export const createEmployee = (req, res) => {
    res.render('createEmployee')
}

export const showDevice = (req, res) => {
    //make get request
    async function getDevices() {
        try {
            const response = await axios.get(
                `http://localhost:${
                    process.env.PORT || 5000
                }/device/show-device`,
            )

            const data = response.data

            res.render('showDevice', { devices: data })
        } catch (error) {
            console.error(error)
        }
    }
    getDevices()
}

export const deleteDevice = async (req, res) => {
    try {
        const idishnik = req.params.id
        const deleted = await axios.get(
            `http://localhost:${
                process.env.PORT || 5000
            }/device/delete-device/${idishnik}`,
        )
        console.log(deleted)
    } catch (error) {
        console.log(error)
    }
}

export const showEmployee = (req, res) => {
    res.render('showEmployee')
}

export const onlyDevice = async (req, res) => {
    try {
        const idishnik = req.params.id
        const deviceData = await axios.get(
            `http://localhost:${
                process.env.PORT || 5000
            }/device/one-device/${idishnik}`,
        )
        res.render('oneDevice', { device: deviceData.data })
    } catch (error) {
        console.log(error)
    }
}

export const chooseDeviceOrFurniture = async (req, res) => {
    try {
        res.render('deviceOrFurniture')
    } catch (error) {
        console.log(error)
    }
}

export const addFurniture = async (req, res) => {
    try {
        res.render('addFurniture')
    } catch (error) {
        console.log(error)
    }
}

export const addEmployee = async (req, res) => {
    try {
        res.render('addEmployee')
    } catch (error) {
        console.log(error)
    }
}

export const viewData = async (req, res) => {
    try {
        res.render('viewDataPage')
    } catch (error) {
        console.log(error)
    }
}

export const viewOnlyData = async (req, res) => {
    try {
        res.render('onlyDataPage')
    } catch (error) {
        console.log(error)
    }
}
