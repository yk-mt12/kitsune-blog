import React from "react"
import AdSense from "react-adsense"

AdSense.Responsive = ({ format = "auto" }) => {
  const [state, setState] = useState({ showAds: false })

  useEffect(() => {
    if (state.showAds) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
    if (window) {
      const minWidth = responsive.tablet.minWidth // 769
      const shouldShowAds = window.innerWidth >= minWidth
      if (shouldShowAds) {
        setState({ showAds: true })
      }
    }
  }, [state.showAds])

  if (!state.showAds) return null

  return (
    <div>
      <Ins
        data-ad-client="ca-pub-1360067821500263"
        data-ad-slot="8338679199"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

const Ins = styled.ins({
  display: "block"
})

export default Adsense
