import markdown as md

def convertToHTML(sourece , dest):
    try:
          # read markdown file
        with open(sourece,'r') as f:
            md_text=f.read()
            
       # convert markdown to HTML     
        html_text=md.markdown(md_text)  
        
             # write HTML to output file
        with open(dest,'w') as f:
            f.write(html_text)
    except:
        print("some error")   
#convert sample.md to HTML       
convertToHTML('sample.md','md.html')        