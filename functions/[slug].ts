import './po.js'

export const onRequest = async ({
  params: { slug }
}) => {
            //    const image = await fetch(`https://ka6.netlify.app/https%3A%2F%2F${encodeURIComponent(slug)}`)

            // const {
            //     readable,
            //     writable
            // } = new TransformStream()
            // image.body.pipeTo(writable)
            // const r = new Response(readable, image)
            // //r.headers.set('Cache-Control', 'max-age=0')
            // return r
return new Response(html(), { status: 200, headers: { 'Content-Type': 'text/html;charset=utf-8' } })
}

 var html = x => `<html prefix="og: http://ogp.me/ns#">
   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta property="og:type" content="article">
      <meta property="og:site_name" content="NAME">
      <meta property="og:title" content="SiTE">
      <meta property="og:description" content="descrip...">
      <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
      <meta property="telegram:channel" content="@cor_bee">
      <meta property="tg:site_verification" content="g7j8/rPFXfhyrq5q0QQV7EsYWv4=">
   </head>
   <body>
      <div class="article">
         <article class="article__content">
            <figure>
               <img src="https://i.ibb.co/m5f2gPz/i.png">
               <figcaption>ZZZ</figcaption>
            </figure>
            <h1><a href="https://telegram.org/faq">Про нас</a></h1>
            <p>В частности, <em>Telegraph умеет в</em>:</p>
            <a href="#update">Update</a>
            <figure>
               <img src="https://i.ibb.co/t8sYgVr/i.png">
               <figcaption>ZZZ</figcaption>
            </figure>
            <p>Немного об <em>очевидных преимуществах</em> Telegraph перед обычными постами:</p>
            <ul>
               <li>расширенное форматирование без танцев с бубнами</li>
               <li>вставка гифок, фото и видеоконтента прямо в текст</li>
               <li>возможность делиться постом за пределами Telegram</li>
               <li>нет «простыни» текста на канале</li>
            </ul>
            <p>В частности, <em>Telegraph умеет в</em>:</p>
            <ul>
               <li><em>курсив</em>, <strong>жирный</strong></li>
               <li>гиперссылки</li>
               <li>два типа заголовков (первого и второго уровней)</li>
            </ul>
            <figure>
               <img src="https://telegra.ph/file/63f5bc7ec687a064a4f2a.png">
               <figcaption>Telegraph - минималистичный редактор</figcaption>
            </figure>
            <details>
               <summary>LOX</summary>
               <table>
                  <thead>
                     <tr>
                        <th>Field</th>
                        <th>Type</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>update_id</td>
                        <td>Integer</td>
                        <td>The update&#39;s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you&#39;re using <a href="#setwebhook">Webhooks</a>, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.</td>
                     </tr>
                     <tr>
                        <td>message</td>
                        <td><a href="#message">Message</a></td>
                        <td><em>Optional</em>. New incoming message of any kind - text, photo, sticker, etc.</td>
                     </tr>
                     <tr>
                        <td>edited_message</td>
                        <td><a href="#message">Message</a></td>
                        <td><em>Optional</em>. New version of a message that is known to the bot and was edited</td>
                     </tr>
                     <tr>
                        <td>channel_post</td>
                        <td><a href="#message">Message</a></td>
                        <td><em>Optional</em>. New incoming channel post of any kind - text, photo, sticker, etc.</td>
                     </tr>
                     <tr>
                        <td>edited_channel_post</td>
                        <td><a href="#message">Message</a></td>
                        <td><em>Optional</em>. New version of a channel post that is known to the bot and was edited</td>
                     </tr>
                     <tr>
                        <td>inline_query</td>
                        <td><a href="#inlinequery">InlineQuery</a></td>
                        <td><em>Optional</em>. New incoming <a href="#inline-mode">inline</a> query</td>
                     </tr>
                     <tr>
                        <td>chosen_inline_result</td>
                        <td><a href="#choseninlineresult">ChosenInlineResult</a></td>
                        <td><em>Optional</em>. The result of an <a href="#inline-mode">inline</a> query that was chosen by a user and sent to their chat partner. Please see our documentation on the <a href="/bots/inline#collecting-feedback">feedback collecting</a> for details on how to enable these updates for your bot.</td>
                     </tr>
                     <tr>
                        <td>callback_query</td>
                        <td><a href="#callbackquery">CallbackQuery</a></td>
                        <td><em>Optional</em>. New incoming callback query</td>
                     </tr>
                     <tr>
                        <td>shipping_query</td>
                        <td><a href="#shippingquery">ShippingQuery</a></td>
                        <td><em>Optional</em>. New incoming shipping query. Only for invoices with flexible price</td>
                     </tr>
                     <tr>
                        <td>pre_checkout_query</td>
                        <td><a href="#precheckoutquery">PreCheckoutQuery</a></td>
                        <td><em>Optional</em>. New incoming pre-checkout query. Contains full information about checkout</td>
                     </tr>
                     <tr>
                        <td>poll</td>
                        <td><a href="#poll">Poll</a></td>
                        <td><em>Optional</em>. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot</td>
                     </tr>
                     <tr>
                        <td>poll_answer</td>
                        <td><a href="#pollanswer">PollAnswer</a></td>
                        <td><em>Optional</em>. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.</td>
                     </tr>
                     <tr>
                        <td>my_chat_member</td>
                        <td><a href="#chatmemberupdated">ChatMemberUpdated</a></td>
                        <td><em>Optional</em>. The bot&#39;s chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.</td>
                     </tr>
                     <tr>
                        <td>chat_member</td>
                        <td><a href="#chatmemberupdated">ChatMemberUpdated</a></td>
                        <td><em>Optional</em>. A chat member&#39;s status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of <em>allowed_updates</em> to receive these updates.</td>
                     </tr>
                     <tr>
                        <td>chat_join_request</td>
                        <td><a href="#chatjoinrequest">ChatJoinRequest</a></td>
                        <td><em>Optional</em>. A request to join the chat has been sent. The bot must have the <em>can_invite_users</em> administrator right in the chat to receive these updates.</td>
                     </tr>
                     <tr>
                        <td>offset</td>
                        <td>Integer</td>
                        <td>Optional</td>
                        <td>Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as <a href="#getupdates">getUpdates</a> is called with an <em>offset</em> higher than its <em>update_id</em>. The negative offset can be specified to retrieve updates starting from <em>-offset</em> update from the end of the updates queue. All previous updates will forgotten.</td>
                     </tr>
                     <tr>
                        <td>limit</td>
                        <td>Integer</td>
                        <td>Optional</td>
                        <td>Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.</td>
                     </tr>
                     <tr>
                        <td>timeout</td>
                        <td>Integer</td>
                        <td>Optional</td>
                        <td>Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.</td>
                     </tr>
                     <tr>
                        <td>allowed_updates</td>
                        <td>Array of String</td>
                        <td>Optional</td>
                        <td>A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See <a href="#update">Update</a> for a complete list of available update types. Specify an empty list to receive all update types except <em>chat_member</em> (default). If not specified, the previous setting will be used.<br><br>Please note that this parameter doesn&#39;t affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.</td>
                     </tr>
                  </tbody>
               </table>
            </details>
            <related>
               <a href="https://telegram.org/blog/chat-themes-interactive-emoji-read-receipts/uk">FAQ</a>
               <a href="https://telegram.org/blog">Блоґ</a>
               <a href="https://telegram.org/blog/shared-media-scrolling-calendar-join-requests-and-more/uk">Робота</a>
            </related>
            <h4><a name="update" href="#update"></a>Update333</h4>
         </article>
      </div>
   </body>
</html>
`