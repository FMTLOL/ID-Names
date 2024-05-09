import { ThemingProps } from '@chakra-ui/react'
import { polygon} from '@wagmi/chains'

export const SITE_NAME = 'ID Names'
export const SITE_DESCRIPTION = 'fms © 2024'
export const SITE_URL = 'fmtlol'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }

export const SOCIAL_TWITTER = 'fmtlol'
export const SOCIAL_LINKEDIN = 'fmtlol'
export const SOCIAL_GITHUB = 'fmtlol'
export const SOCIAL_TELEGRAM= 'fmtlol'

export const NETWORKS = [polygon]; //polygon, filecoin, polygonMumbai
export const NETWORK_ERROR = "Connect Wallet" //Change network name as required

export const DOMAIN_TLD = 'id' //primary domain name without dot (.)
export const DOMAIN_IMAGE_URL = 'https://ipfs.io/ipfs/QmRkLXnfv2Wpc6jx4pmsEZhqEVwQCYuHgJ3vcuSCXmXPNE' //Image path starts with ipfs:// or https://
export const DOMAIN_NETWORK_CHAIN = 137 //137 for polygon, 314 for filecoin, 80001 form mumbai
export const DOMAIN_DESCRIPTION = 'Web3 Domain Name'
export const DOMAIN_TYPE = "W3D" //W3D for polygon, FVM for Filecoin net
export const DOMAIN_TITLE = "" //Title above the search input field. 
export const DOMAIN_PLACEHOLDER = "Search for ID.. Mint price 2.000.000 F" //Placeholder for search input field 

export const ADMIN_WALLET = "0xDb800bA0ab92D61a3Ff7A299DC7101FAD723CC9c" //ETH wallet address 

export const NOTICE_TITLE = ""
export const NOTICE_NON_MEMBER = ""

export const DOMAIN_BANNER = "https://i.imgur.com/1lGknqu.png" //290x80 size

//Configuration should match with the chain specified at NETWORKS
//Leave TOKEN_CONTRACT_ADDRESS to blank for default ETH payment
//export const TOKEN_CONTRACT_ADDRESS="0x76174204db0bC7c3C817ce5b16C6Ef3900434B02" //ERC20 EVM Token contract wallet address
export const TOKEN_SYMBOL= "F" //Token symbol name eg. DOGE
export const TOKEN_PRICE = "2000000" //Token price to mint
export const TOKEN_DECIMAL = "18" //Decimal places of TOKEN_CONTRACT_ADDRESS or TOKEN_SYMBOL
export const TOKEN_CONTRACT_ADDRESS="0x4D3114B43fB220CE0E60C2F94495Ab8Ce9B2FA9d"
