import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface NavBarProps {
  isOpen: boolean
  toggleNavBar: () => void
}

export default function TemporaryDrawer({ isOpen, toggleNavBar }: NavBarProps) {
  const NavBar = (
    <Box
      sx={{ width: 250, height: '100vh', background: '#373737', color: '#fff' }}
      role='presentation'
    >
      <List>
        <IconButton
          onClick={toggleNavBar}
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ marginLeft: 0.5 }}
        >
          <MenuIcon />
        </IconButton>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: '#fff' }} />
                ) : (
                  <MailIcon sx={{ color: '#fff' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#fff' }} />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: '#fff' }} />
                ) : (
                  <MailIcon sx={{ color: '#fff' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Drawer open={isOpen}>{NavBar}</Drawer>
    </div>
  )
}
