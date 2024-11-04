import { JobRecord } from '../models/models'

type Props = {
    jobRecords: JobRecord[]
}

const MainTable = ({ jobRecords }: Props) => {
    return (
        <div className="p-4 md:p-10">
            <div className="rounded-lg border border-gray-300">
                <table className="w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-300 py-2 text-lg">
                                Position
                            </th>
                            <th className="border-b border-l border-r border-gray-300 py-2 text-lg">
                                Company
                            </th>
                            <th className="border-b border-gray-300 py-2 text-lg">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobRecords.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="p-4 text-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/9841/9841553.png"
                                        alt="no job icon"
                                        className="mx-auto my-2 w-40 text-center"
                                    />
                                    <p className="mb-4">
                                        Seems like you don't have any job
                                        records yet. Add a new one!
                                    </p>
                                </td>
                            </tr>
                        ) : (
                            jobRecords.map((jobRecord) => (
                                <tr key={jobRecord.id}>
                                    <td className="p-2">{jobRecord.title}</td>
                                    <td className="border-l border-r border-gray-300 p-2">
                                        {jobRecord.company}
                                    </td>
                                    <td className="p-2">{jobRecord.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainTable
