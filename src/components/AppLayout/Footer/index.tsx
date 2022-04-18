import { ButtonLink, Link } from '@gnosis.pm/safe-react-components'
import { makeStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import AppstoreButton from 'src/components/AppstoreButton'
import { openCookieBanner } from 'src/logic/cookies/store/actions/openCookieBanner'
import { screenSm, sm } from 'src/theme/variables'

const useStyles = makeStyles({
  footer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexShrink: '1',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '100%',
    padding: `20px ${sm} 20px`,
    width: `${screenSm}px`,
  },
  item: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '14px',
  },
  sep: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: '0 10px',
  },
  buttonLink: {
    padding: '0',
    p: {
      margin: '0',
    },
  },
} as any)

const Footer = (): React.ReactElement => {
  const appVersion = process.env.REACT_APP_APP_VERSION ? `v${process.env.REACT_APP_APP_VERSION} ` : 'Versions'
  const date = new Date()
  const classes = useStyles()
  const dispatch = useDispatch()

  const openCookiesHandler = () => {
    dispatch(openCookieBanner({ cookieBannerOpen: true }))
  }

  return (
    <footer className={classes.footer}>
      <span className={classes.item}>©{date.getFullYear()} Gnosis</span>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://gnosis-safe.io/terms">
        Terms
      </Link>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://gnosis-safe.io/privacy">
        Privacy
      </Link>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://gnosis-safe.io/licenses">
        Licenses
      </Link>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://gnosis-safe.io/imprint">
        Imprint
      </Link>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://gnosis-safe.io/cookie">
        Cookie Policy
      </Link>
      <span className={classes.sep}>-</span>
      <ButtonLink
        className={classes.buttonLink}
        type="button"
        color="primary"
        aria-aria-labelledby="Cookie Preferences"
        onClick={openCookiesHandler}
      >
        Preferences
      </ButtonLink>
      <span className={classes.sep}>|</span>
      <Link size="lg" target="_blank" href="https://github.com/gnosis/safe-react/releases">
        {appVersion}
      </Link>
      <span className={classes.sep}>|</span>
      <AppstoreButton light placement="footer" />
    </footer>
  )
}

export default Footer
