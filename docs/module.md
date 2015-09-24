<a name="module_spex"></a>
## spex ⇒ <code>Object</code>
Attaches to an external promise library to provide additional methods built solely

**Summary**: Specialized Promise Extensions  
**Returns**: <code>Object</code> - Namespace with all supported methods.  
**See**: <a href="batch.md">batch</a>, <a href="page.md">page</a>, <a href="sequence.md">sequence</a>  
**Author:** Vitaly Tomilov  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>promiseLib</td><td><code>Object</code> | <code>function</code></td><td><p>Instance of a promise library to be used by this module.</p>
<p>Some implementations use <code>Promise</code> constructor to create a new promise, while
others use the module&#39;s function for it. The two types are supported the same.</p>
<p>Passing in a promise library that cannot be recognized will throw
<code>Invalid promise library specified.</code></p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>Object</code></td><td><p>Optional configuration object with properties - options.</p>
<p>Not used in the current version of the library.</p>
</td>
    </tr>  </tbody>
</table>
