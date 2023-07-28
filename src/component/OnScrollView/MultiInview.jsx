import { useInView } from 'react-intersection-observer';

const MultiInview = ( {children} ) => {

    const { ref, inView } = useInView({  threshold: 0, });

    return (
             <div ref={ref}>    
               { inView ? <>{children}</> : null }
             </div>
          )
}

export default MultiInview;