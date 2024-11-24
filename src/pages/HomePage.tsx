import { useBool } from '../hooks/useBool'
import MainTable from '../components/main/mainTable'
import Button from '../components/reuseable/button'
import { JobRecord, JobStatus } from '../models/jobModels'
import Modal from '../components/reuseable/modal'

const HomePage = () => {
    var jobRecords: JobRecord[] = []
    const modalState = useBool(false)

    // Data fetching process
    const getJobRecords = () => {}

    // Dummy data
    jobRecords = [
        {
            id: 1,
            title: 'Software Engineer asd asd asd asdasd as sad sad',
            company: 'Google asdsa asd as asd sa sa sadsadas',
            status: JobStatus.applied,
            location: 'Mountain View, CA',
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
            location: 'Menlo Park, CA',
        },
        {
            id: 3,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
            location: 'Seattle, WA',
        },
        {
            id: 4,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
            location: 'Redmond, WA',
        },

        {
            id: 5,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
            location: 'Mountain View, CA',
        },
        {
            id: 6,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
            location: 'Menlo Park, CA',
        },
        {
            id: 7,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
            location: 'Seattle, WA',
        },
        {
            id: 8,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
            location: 'Redmond, WA',
        },

        {
            id: 9,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
            location: 'Mountain View, CA',
        },
        {
            id: 10,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
            location: 'Menlo Park, CA',
        },
        {
            id: 11,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
            location: 'Seattle, WA',
        },
        {
            id: 12,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
            location: 'Redmond, WA',
        },

        {
            id: 13,
            title: 'Software Engineer',
            company: 'Google',
            status: JobStatus.applied,
            location: 'Mountain View, CA',
        },
        {
            id: 14,
            title: 'Product Manager',
            company: 'Facebook',
            status: JobStatus.interview,
            location: 'Menlo Park, CA',
        },
        {
            id: 15,
            title: 'Data Analyst',
            company: 'Amazon',
            status: JobStatus.offer,
            location: 'Seattle, WA',
        },
        {
            id: 16,
            title: 'Software Engineer',
            company: 'Microsoft',
            status: JobStatus.rejected,
            location: 'Redmond, WA',
        },
    ]

    return (
        <div className="md:px-6 lg:px-20">
            <div className="mr-6 flex justify-end">
                <Button
                    text="Add record"
                    onClick={() => {
                        modalState.set(true)
                    }}
                    color="primary"
                />
            </div>

            <MainTable jobRecords={jobRecords} />

            {modalState.val && (
                <Modal
                    title="User Terms asd as dsa s"
                    isShown={modalState.val}
                    setHide={() => modalState.set(false)}
                    buttonText={['Close', 'Alert']}
                    buttonAction={[
                        () => modalState.set(false),
                        () => alert('Button clicked'),
                    ]}
                >
                    <div id="content-2a" className="flex-1 overflow-auto">
                        <p>
                            A Terms and Conditions agreement is where you let
                            the public know the terms, rules and guidelines for
                            using your website or mobile app. They include
                            topics such as acceptable use, restricted behavior
                            and limitations of liability
                        </p>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default HomePage
