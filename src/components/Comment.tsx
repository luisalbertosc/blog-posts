import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeCount(){
        setLikeCount(state => state + 1)
    }
    return(
        <div className={styles.comment}>
            
            <Avatar
            hasBorder={false}
            src="https://github.com/luisalbertosc.png"
            alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luis Correia</strong>
                            <time title='03 de outubro de 2022' dateTime='2022-10-03 15:30:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>


        </div>
    )
}