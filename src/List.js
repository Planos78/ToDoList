import React from 'react'
import PropsType from 'prop-types';
const List = ({ id, title, deletePost }) => {
    return (
        <div className='List'>
            <button className='List__delete' onClick={() => (
                deletePost(id)
            )}>
                X
            </button>
            <div className='List__field'>
                <span className='List__content'>สิ่งที่ต้องทำ: </span> {title}
            </div>

        </div>
    )
}

List.PropsType = {
    title: PropsType.string.isRequired,
    deletePost: PropsType.func.isRequired
}

export default List;