import MainTable from '../components/MainTable'
import { JobRecord } from '../models/models'

const HomePage = () => {
    var jobRecords: JobRecord[] = []

    // Data fetching process
    const getJobRecords = () => {}

    // Dummy data
    // jobRecords = [
    //     {
    //         id: 1,
    //         title: 'Software Engineer',
    //         company: 'Google',
    //         status: 'Applied',
    //     },
    //     {
    //         id: 2,
    //         title: 'Product Manager',
    //         company: 'Facebook',
    //         status: 'Interview',
    //     },
    //     {
    //         id: 3,
    //         title: 'Data Analyst',
    //         company: 'Amazon',
    //         status: 'Offer',
    //     },
    // ]

    return <MainTable jobRecords={jobRecords} />
}

export default HomePage
