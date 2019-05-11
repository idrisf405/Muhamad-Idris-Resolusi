2. - Validasi Username Harus Lebih Dari 8
       -Bahasa Pemograman Visual Studio 2012
	 If e.KeyChar = Chr(13) Then
            If Len(Me.TextBoxt1.Text) > 8 Then
                Me.TextBoxt2.Focus()
            Else
                MsgBox(“Nama harus lebih dari (>8) karakter !!”, MsgBoxStyle.Information, “Message !!”)
                Me.TNAMA.Text = “”
                Me.TNAMA.Focus()
            End If
          End If
       -Bahasa Web
          <input type="text" name="username" minlength="8">
     
    -  Validasi Email
      -Bahasa Pemograman Visual Studio 2012
	Dim validasiemail As String = "^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$"
            If System.Text.RegularExpressions.Regex.Match(txtemail.Text, validasiemail).Success Then
               MsgBox("Email Sesuai", MsgBoxStyle.Information, "Info")
		exit sub
            Else
                MsgBox("Masukan Email Yang Benar!!!", MsgBoxStyle.Critical, "Email Tidak Valid")
                txtemail.Clear()
                txtemail.Focus()
            End If
      
     - Bahasa Web

	function validasi() {
	var Email= document.getElementById('email').value;
		
 	   if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", trim(Email))) {
        	return TRUE;
                }
                alert('Email Tidak Valid !');
   	 	return FALSE;
	     }