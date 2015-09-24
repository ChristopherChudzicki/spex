<a name="sequence"></a>
## sequence(source, [dest], [limit], [track]) ⇒ <code>Promise</code>
Acquires <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed values</a> from the source function, one at a time, and resolves them,

**Kind**: global function  
**Summary**: Resolves a dynamic sequence of <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed values</a>.  
**Returns**: <code>Promise</code> - When successful, the resolved data depends on parameter `track`. When `track` is `false`
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>source</td><td><code>function</code></td><td></td><td><p>Expected to return the next <a href="https://github.com/vitaly-t/spex/wiki/Mixed-Values">mixed value</a> to be resolved. If the value resolves
into <code>undefined</code>, it signals the end of the sequence, and the method resolves.</p>
<p>Parameters:</p>
<ul>
<li><code>index</code> = current request index in the sequence</li>
<li><code>data</code> = resolved data from the previous call (<code>undefined</code> when <code>index=0</code>)</li>
</ul>
<p>The function is called with the same <code>this</code> context as the calling method.</p>
<p>If the function throws an error or returns a rejected promise, the sequence terminates,
and the method rejects with object <code>{index, error, source}</code>:</p>
<ul>
<li><code>index</code> = index of the request that failed</li>
<li><code>error</code> = the error thrown or the rejection reason</li>
<li><code>source</code> = resolved <code>data</code> that was passed into the function</li>
</ul>
<p>Passing in anything other than a function will throw <code>Invalid sequence source.</code></p>
</td>
    </tr><tr>
    <td>[dest]</td><td><code>function</code></td><td></td><td><p>Optional destination function (notification callback), to receive resolved data for each index,
process it and respond as required.</p>
<p>Parameters:</p>
<ul>
<li><code>index</code> = index of the resolved data in the sequence</li>
<li><code>data</code> = the data resolved</li>
</ul>
<p>The function is called with the same <code>this</code> context as the calling method.</p>
<p>It can optionally return a promise object, if data processing is done asynchronously.
If a promise is returned, the method will not request the next value from the <code>source</code> function,
until the promise has been resolved.</p>
<p>If the function throws an error or returns a promise that rejects, the sequence terminates,
and the method rejects with object <code>{index, error, dest}</code>:</p>
<ul>
<li><code>index</code> = index of the data that was processed</li>
<li><code>error</code> = the error thrown or the rejection reason</li>
<li><code>dest</code> = resolved data that was passed into the function</li>
</ul>
<p>Passing in a non-empty value other than a function will throw <code>Invalid sequence destination.</code></p>
</td>
    </tr><tr>
    <td>[limit]</td><td><code>Number</code></td><td><code>0</code></td><td><p>Limits the maximum size of the sequence. If the value is an integer greater than 0,
the method will successfully resolve once the specified limit has been reached.
By default, the sequence is unlimited, and will continue till either <code>source</code> function
returns <code>undefined</code> or an error/reject occurs.</p>
</td>
    </tr><tr>
    <td>[track]</td><td><code>Boolean</code></td><td><code>false</code></td><td><p>This parameter changes the type of data to be resolved by this method.
By default, it is <code>false</code> (see the return result).
When set to be <code>true</code>, it instructs the method to track/collect all resolved data into
an array internally, so it can be resolved with once the method has finished successfully.</p>
<p>It must be used with caution, as to the size of the sequence, because accumulating data for
a very large sequence can result in consuming too much memory.</p>
</td>
    </tr>  </tbody>
</table>
