import MainTable from '../components/MainTable'
import { JobRecord, JobStatus } from '../models/jobModels'

const HomePage = () => {
    var jobRecords: JobRecord[] = []

    // Data fetching process
    const getJobRecords = () => {}

    // Dummy data
    jobRecords = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
        },
        {
            id: 3,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
        },
    ]

    return <MainTable jobRecords={jobRecords} />
}

export default HomePage
