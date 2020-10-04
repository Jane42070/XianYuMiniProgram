export const request = (params) => {
    return new Promise((reslove, reject) => {
        wx.request({
            ...params,
            success:(result)=>{
                reslove(result)
            },
            fail: (err)=>{
                reject(err)
            }
        })
    })
}