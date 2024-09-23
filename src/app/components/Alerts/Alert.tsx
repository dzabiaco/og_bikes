

export default function Alert({closeAlert, type, message}) {
    const getBannerStyles = () => {
    switch (type) {
        case 'error':
            return {
                backgroundColor: '#f8d7da',
                color: '#721c24',
                border: '1px solid #f5c6cb',
            };
        case 'success':
            return {
                backgroundColor: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
            };
        default:
            return {};
    }
    }

    return (
        <div style={{ padding: '10px', borderRadius: '5px', ...getBannerStyles() }}>
            {message}
        </div>
    );
}