import MainTable from '../components/MainTable'
import { JobRecord } from '../models/models'

const HomePage = () => {
    var jobRecords: JobRecord[] = []

    // Data fetching process
    const getJobRecords = () => {}

    return <MainTable jobRecords={jobRecords} />
}

export default HomePage
