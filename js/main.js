// JS placeholder
export default function Home() {
  return (
    <div>
      <h1>欢迎来到 Barcelona Imperial</h1>
      <p>这是我们网站的首页内容。</p>
    </div>
  );
}

function showProduct(id) {
  const sections = document.querySelectorAll('.product-item');
  sections.forEach(section => section.style.display = 'none');

  document.getElementById(`product-${id}`).style.display = 'block';
}
