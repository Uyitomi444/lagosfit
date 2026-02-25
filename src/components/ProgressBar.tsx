

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="progress-container">
            <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

export default ProgressBar;
