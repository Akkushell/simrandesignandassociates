# Script to update all gallery pages with 24 images each

$pages = @(
    @{
        file = "gallery-dining.html"
        title = "Dining Room Design Ideas Gallery"
        emoji = "🍽️"
        heading = "Dining Room Design Ideas"
        description = "Discover elegant dining tables, modern dining chairs, stunning chandeliers, buffet units, and sophisticated dining spaces"
        images = @(
            @{url="photo-1617806118233-18e1de247200"; title="Modern Dining Room"; desc="Contemporary design and comfort"},
            @{url="photo-1617103996702-96ff29b1c467"; title="Elegant Dining Table"; desc="Sophisticated centerpiece"},
            @{url="photo-1600210491892-03d54c0aaf87"; title="Dining Room Chandelier"; desc="Statement lighting fixture"},
            @{url="photo-1556911220-bff31c812dba"; title="Minimalist Dining Space"; desc="Clean and simple elegance"},
            @{url="photo-1600607687920-4e2a09cf159d"; title="Family Dining Area"; desc="Warm and inviting atmosphere"},
            @{url="photo-1600566752355-35792bedcfea"; title="Formal Dining Room"; desc="Classic and luxurious"},
            @{url="photo-1616594039964-ae9021a400a0"; title="Scandinavian Dining"; desc="Light wood and neutral tones"},
            @{url="photo-1556911220-e15b29be8c8f"; title="Dining Room Buffet"; desc="Stylish storage solution"},
            @{url="photo-1600210492493-0946911123ea"; title="Open Plan Dining"; desc="Integrated living space"},
            @{url="photo-1585933646011-cd1b1de6cd02"; title="Rustic Dining Room"; desc="Natural materials and warmth"},
            @{url="photo-1600607687644-c7171b42498f"; title="Dining Room Chairs"; desc="Comfortable and stylish seating"},
            @{url="photo-1600566753190-17f0baa2a6c3"; title="Modern Pendant Lights"; desc="Contemporary dining illumination"},
            @{url="photo-1600585152220-90363fe7e115"; title="Compact Dining Space"; desc="Smart use of small areas"},
            @{url="photo-1522771739844-6a9f6d5f14af"; title="Luxury Dining Room"; desc="Premium finishes and details"},
            @{url="photo-1600573472592-401b489a3cdc"; title="Industrial Dining Style"; desc="Raw and modern aesthetic"},
            @{url="photo-1560448204-e02f11c3d0e2"; title="Dining Room Decor"; desc="Artistic wall treatments"},
            @{url="photo-1600607686527-6fb886090705"; title="Round Dining Table"; desc="Perfect for conversation"},
            @{url="photo-1600566753151-384129cf4e3e"; title="Dining Room Colors"; desc="Vibrant and energetic palette"},
            @{url="photo-1584622650111-993a426fbf0a"; title="White Dining Room"; desc="Bright and airy space"},
            @{url="photo-1620626011761-996317b8d101"; title="Dining Nook Design"; desc="Cozy breakfast corner"},
            @{url="photo-1600585152915-d208bec867a1"; title="Extendable Dining Table"; desc="Flexible entertaining solution"},
            @{url="photo-1600607686847-fb731e5aa0c0"; title="Dining Room Curtains"; desc="Elegant window treatments"},
            @{url="photo-1604709177225-055f99402ea3"; title="Dining Room Storage"; desc="Built-in cabinets and displays"},
            @{url="photo-1552321554-5fefe8c9ef14"; title="Contemporary Dining"; desc="Modern and sophisticated design"}
        )
    }
)

# Function to create gallery HTML
function Create-GalleryHTML {
    param($images)
    
    $html = ""
    for ($i = 0; $i -lt $images.Count; $i++) {
        $idx = $i + 1
        $img = $images[$i]
        $html += @"

        <div class="gallery-item" data-index="$idx">
          <img src="https://images.unsplash.com/$($img.url)?auto=format&fit=crop&w=800&q=80" alt="$($img.title)">
          <div class="gallery-overlay">
            <h3>$($img.title)</h3>
            <p>$($img.desc)</p>
          </div>
        </div>
"@
    }
    return $html
}

# Process each page
foreach ($page in $pages) {
    $filePath = "c:\AKKUELECTRONICS\simrandesignandassociates\assets\$($page.file)"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $($page.file)..." -ForegroundColor Cyan
        
        # Read the file
        $content = Get-Content $filePath -Raw
        
        # Update title
        $content = $content -replace '<title>.*?</title>', "<title>$($page.title) | Simran Design's & Associates</title>"
        
        # Update/add meta description
        if ($content -match '<meta name="description"[^>]*>') {
            $content = $content -replace '<meta name="description"[^>]*>', "<meta name=`"description`" content=`"$($page.description)`" />"
        } else {
            $content = $content -replace '(<meta name="viewport"[^>]*>)', "`$1`n  <meta name=`"description`" content=`"$($page.description)`" />"
        }
        
        # Update hero section
        $content = $content -replace '<h1>.*?</h1>', "<h1>$($page.emoji) $($page.heading)</h1>"
        $content = $content -replace '(<h1>.*?</h1>\s*<p>).*?(</p>)', "`${1}$($page.description)`${2}"
        
        # Create new gallery section
        $galleryHTML = Create-GalleryHTML -images $page.images
        
        # Replace gallery items
        $pattern = '(?s)(<div class="spiral-gallery">\s*).*?(\s*</div>\s*</div>\s*</section>)'
        $replacement = "`${1}$galleryHTML`n`n      `${2}"
        $content = $content -replace $pattern, $replacement
        
        # Save the file
        $content | Set-Content $filePath -NoNewline
        
        Write-Host "✓ $($page.file) updated successfully!" -ForegroundColor Green
    }
}

Write-Host "`nAll galleries updated!" -ForegroundColor Green
