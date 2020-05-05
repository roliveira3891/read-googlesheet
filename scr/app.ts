import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../credentials.json'
import { Tecnico } from './schemas/Tecnico'

const docId = '1qrF7qR0GuMWvwsR5RxTXFHJl6No2FOsFE__9DcJWMZ0'

class accessSheet {
    
    constructor(){}

    public async read(){
        console.log('index')
        const doc = new GoogleSpreadsheet(docId)
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo()
        const sheet = await doc.sheetsByIndex[0]
        const rows = await sheet.getRows()
        await rows.forEach(value => {
            Tecnico.create (
            {
                email: value.email, 
                nome: value.nome, 
                upsert: true 
            })
        });

    }
}

export default new accessSheet().read