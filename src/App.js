import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        {`<!-- [Start VWO Async SmartCode -->`}
        <script type="text/javascript" id="vwoCode">
          {`window._vwo_code=window._vwo_code || (function() {
var account_id=666199,
version=1.4,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
/* DO NOT EDIT BELOW THIS LINE */
f=false,d=document,vwoCodeEl=document.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.innerText;t.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=decodeURIComponent(document.cookie).match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(vis_opt_exp_\\d*._combi=[\\d,]+)/g);var i=[];e.forEach(function(e){var t=e.match(/([\\d,]+)/g);i.push(t.join('-'))});return i.join('|')},init:function(){window.settings_timer=setTimeout(function(){_vwo_code.finish()},settings_tolerance);var e=d.createElement('style'),t=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',i=d.getElementsByTagName('head')[0];e.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&e.setAttribute('nonce',vwoCodeEl.nonce);e.setAttribute('type','text/css');if(e.styleSheet)e.styleSheet.cssText=t;else e.appendChild(d.createTextNode(t));i.appendChild(e);var n=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(n?'&c='+n:''));return settings_timer}};window._vwo_settings_timer = code.init();return code;}());`}
        </script>
        {`<!-- [End VWO Async SmartCode -->`}
      </Helmet>

      <header
        className="App-header"
        style={{
          backgroundColor: "white",
          height: "100vh",
          border: "20px solid grey",
          padding: "20px",
        }}
      >
         <div style={{ marginTop: "100px" }}>
          <input type="text" />

          <button>Click1</button>
        </div>

        <div style={{ marginTop: "100px" }}>
          <input type="text" />

          <button>Click2</button>
        </div>

        <div className="buttons">
          <button className="btn" style={{backgroundColor: "red",color: "white",fontSize: "20px"}}>Button 1</button>
          <button className="btn" style={{backgroundColor: "green",color: "white",fontSize: "20px"}}>Button 2</button>
          <button className="btn" style={{backgroundColor: "blue",color: "white",fontSize: "20px"}}>Button 3</button>
          <button className="btn" style={{backgroundColor: "grey",color: "white",fontSize: "20px"}}>Button 4</button>
          <button className="btn" style={{backgroundColor: "pink",color: "white",fontSize: "20px"}}>Button 5</button>
          <button className="btn" style={{backgroundColor: "violet",color: "white",fontSize: "20px"}}>Button 6</button>
        </div>
      </header>
    </div>
  );
}

export default App;
