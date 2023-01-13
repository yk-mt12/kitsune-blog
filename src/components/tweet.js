import React from 'react';
import { Timeline } from "react-twitter-widgets";
import styled from 'styled-components'

export const TweetTimeline = () => {
  return (
    <STimeline >
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'kitsune_yk'
        }}
        options={{
          height: '600',
          width: '100%'
        }}
      />
    </STimeline>
  )
}

const STimeline = styled.div`
margin: 8px 20%;
`