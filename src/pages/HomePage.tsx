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
        {
            id: 4,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
        },

        {
            id: 5,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
        },
        {
            id: 6,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
        },
        {
            id: 7,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
        },
        {
            id: 8,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
        },

        {
            id: 9,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
        },
        {
            id: 10,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
        },
        {
            id: 11,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
        },
        {
            id: 12,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
        },

        {
            id: 13,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
        },
        {
            id: 14,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
        },
        {
            id: 15,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
        },
        {
            id: 16,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
        },
    ]

    return (
        <div className="md:px-6 lg:px-20">
            <MainTable jobRecords={jobRecords} />
        </div>
    )
}

export default HomePage
