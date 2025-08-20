// Button component kept simple since styles are global via CSS variables.
// Usage: <Button variant="primary">Donate</Button>
export default function Button({variant='primary', as:'button', className='', ...props}){
  const Tag = props.href ? 'a' : 'button';
  const vClass = variant==='secondary' ? 'btn secondary' : variant==='outline' ? 'btn outline' : 'btn primary';
  return <Tag className={vClass + (className ? ' '+className : '')} {...props}/>;
}
