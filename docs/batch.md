<a name="batch"></a>
## batch(values, [cb]) ⇒ <code>Promise</code>
Settles (resolves or rejects) every <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed value</a> in the input array, and resolves

**Kind**: global function  
**Summary**: Resolves a predefined array of <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed values</a>.  
**Returns**: <code>Promise</code> - Result for the entire batch, which resolves when every value in the input array has been resolved,
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>Array</code></td><td><p>Array of <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed values</a> for asynchronous resolution.</p>
<p>Passing in anything other than an array will throw <code>Batch requires an array of values.</code></p>
</td>
    </tr><tr>
    <td>[cb]</td><td><code>function</code></td><td><p>Optional callback to receive the result for each value.</p>
<p>Parameters:</p>
<ul>
<li><code>index</code> = index of the value in the array</li>
<li><code>success</code> - indicates whether the value was resolved (<code>true</code>), or rejected (<code>false</code>)</li>
<li><code>data</code> = resolved data, if <code>success</code>=<code>true</code>, or else the rejection reason</li>
</ul>
<p>The function is called with the same <code>this</code> context as the calling method.</p>
<p>It can optionally return a promise to indicate that notifications are handled asynchronously.
And if the returned promise resolves, it signals a successful handling, while any resolved
data is ignored.</p>
<p>If the function returns a rejected promise or throws an error, the entire method rejects,
while the rejected value is reported as object <code>{success, result, origin}</code>:</p>
<ul>
<li><code>success</code> = <code>false</code></li>
<li><code>result</code> = the rejection reason or the error thrown by the notification callback</li>
<li><code>origin</code> = the original data passed into the callback, as object <code>{success, result}</code></li>
</ul>
</td>
    </tr>  </tbody>
</table>
