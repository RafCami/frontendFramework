import { FunctionComponent, Suspense, useState } from 'react'
import { HackernewsStoryEndpoints, useGetItemIds } from '../api/hackernewsAPI'
import Item from './Item'
import { Button } from 'react-bootstrap'
import ItemLoading from './ItemLoading'

interface TopItemsProps {
    endpoint: HackernewsStoryEndpoints
}

const TopItems: FunctionComponent<TopItemsProps> = ({ endpoint }) => {
    const { data: storyIds } = useGetItemIds(endpoint)
    const [visible, setVisible] = useState(10)

    return (
        <>
            {storyIds?.slice(0, Math.max(10, visible - 10)).map((storyId) => (
                <Item key={storyId} id={storyId} />
            ))}

            <Suspense fallback={<ItemLoading />}>
                {visible > 10 &&
                    storyIds
                        ?.slice(visible - 10, visible)
                        .map((storyId) => <Item key={storyId} id={storyId} />)}
            </Suspense>
            {storyIds && storyIds?.length > visible && (
                <Button
                    variant='link'
                    className='my-2'
                    onClick={() => setVisible((x) => x + 10)}
                >
                    Load more...
                </Button>
            )}
        </>
    )
}

export default TopItems
