import { DotSpinner } from '@uiball/loaders';

const ImagesLoader = () => {
    return (
        <div className="Loader">
            <DotSpinner size={100} speed={0.6} color="#3f51b5" />
        </div>
    );
};

export default ImagesLoader;
