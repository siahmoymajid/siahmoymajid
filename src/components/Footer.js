import { Stack } from 'react-bootstrap'
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

function Footer({ github, linkedin, email }) {
  return (
    <Stack direction="horizontal" gap={3} className='border-top border-2 mt-5 border-mute py-3'>
      <a className="icon-link link-light" href={github} target='_blank' rel="noopener noreferrer" aria-describedby='GitHub'><Github />
      </a>
      <a className="icon-link link-light" href={linkedin} target='_blank' rel="noopener noreferrer" aria-describedby='LinkedIn'>
        <Linkedin />
      </a>
      <a className="icon-link link-light" href={`mailto:${email}`} target='_blank' rel="noopener noreferrer" aria-describedby='Email'>
        <Envelope />
      </a>
      <div className='copyright mb-o ms-auto text-end text-success '>
        Copyright &copy; {new Date().getFullYear()} Sia Majid</div>
    </Stack>
  );
}

export default Footer;