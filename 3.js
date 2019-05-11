3. Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
	Dim MD5 As New System.Security.Cryptography.MD5CryptoServiceProvider()
	Dim Bytes() As Byte = MD5.ComputeHash(System.Text.Encoding.ASCII.GetBytes(textToHash))
	Dim s As String = Nothing
	For Each by As Byte In Bytes
	s += by.ToString(“x2?)
	Next
	Return s
	TextBox2.Text = computeHash(TextBox1.Text)
   End Sub 	

	
	