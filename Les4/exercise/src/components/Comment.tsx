/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { FunctionComponent, Suspense, useState } from 'react'
import styled from 'styled-components'
import { useGetItem } from '../api/hackernewsAPI'
import LoadingPart from './loadingPart'

const CommentContent = styled.div`
    margin-left: 1.5em;
    border: 0.5px solid #455a64;
    padding: 0.5em;
    margin-bottom: 1em;
    width: 95%;
`
const NoStyleBtn = styled.button`
    background: unset;
    border: none;
`

interface CommentProps {
    id: number
}

const Comment: FunctionComponent<CommentProps> = ({ id }) => {
    const { data: comment } = useGetItem(id)
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [showMore, setShowMore] = useState<boolean>(false)

    return (
        <>
            <h4>
                <NoStyleBtn onClick={() => setIsOpen((x) => !x)}>
                    {isOpen ? <span>&and;</span> : <span>&or;</span>}
                </NoStyleBtn>
                &nbsp;&nbsp; By {comment?.by} at{' '}
                {new Date(comment?.time! * 1000).toLocaleString()}
            </h4>
            {isOpen && (
                <CommentContent>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: comment?.text ?? '',
                        }}
                    ></p>
                    {comment?.kids && !showMore && (
                        <NoStyleBtn onClick={() => setShowMore(true)}>
                            Show more comments ...
                        </NoStyleBtn>
                    )}
                    <Suspense fallback={<LoadingPart />}>
                        {comment?.kids &&
                            showMore &&
                            comment?.kids.map((kid) => (
                                <Comment key={kid} id={kid} />
                            ))}
                    </Suspense>
                </CommentContent>
            )}
        </>
    )
}

export default Comment
